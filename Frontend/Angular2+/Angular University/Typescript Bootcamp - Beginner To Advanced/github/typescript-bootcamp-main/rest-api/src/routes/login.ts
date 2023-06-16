import {NextFunction, Request, Response} from "express";
import {logger} from "../logger";
import {AppDataSource} from "../data-source";
import {User} from "../models/user";
import {calculatePasswordHash} from "../utils";
const JWT_SECRET = process.env.JWT_SECRET;
const jwt = require("jsonwebtoken");

/**
 *
 * curl -X POST http://localhost:9000/api/login -H "Content-Type:application/json" -d '{"email": "test@angular-university.io", "password":"test"}'
 *
 */

export async function login(request: Request, response: Response, next:NextFunction) {

    try {

        logger.debug(`Called login()`);

        const {email, password} = request.body;

        if (!email) {
            throw `Could not extract the email from the request, aborting.`;
        }

        if (!password) {
            throw `Could not extract the plain text password from the request, aborting.`;
        }

        const user = await AppDataSource
            .getRepository(User)
            .createQueryBuilder("users")
            .where("email = :email", {email})
            .getOne();

        if (!user) {
            const message = `Login denied.`;
            logger.info(`${message} - ${email}`);
            response.status(403).json({message});
            return;
        }

        const passwordHash = await calculatePasswordHash(password, user.passwordSalt);

        if (passwordHash != user.passwordHash) {
            const message = `Login denied.`;
            logger.info(`${message} - user with ${email} has entered the wrong password.`);
            response.status(403).json({message});
            return;
        }

        logger.info(`User ${email} has now logged in.`);

        const {pictureUrl, isAdmin} = user;

        const authJwt = {
          userId: user.id,
          email,
          isAdmin
        };

        const authJwtToken = await jwt.sign(authJwt, JWT_SECRET);

        response.status(200).json({
            user: {
                email,
                pictureUrl,
                isAdmin
            },
            authJwtToken
        });

    }
    catch(error) {
        logger.error(`Error calling login()`);
        return next(error);
    }

}
