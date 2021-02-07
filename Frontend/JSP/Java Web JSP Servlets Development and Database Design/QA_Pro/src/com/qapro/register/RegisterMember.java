package com.qapro.register;

import java.beans.PropertyVetoException;
import java.io.IOException;
import java.math.BigInteger;
import java.security.SecureRandom;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.mysql.jdbc.Statement;
import com.qapro.util.DBConnectionUtil;



/**
 * Servlet implementation class RegisterMember
 */
public class RegisterMember extends HttpServlet {
	private static final long serialVersionUID = 1L;

    /**
     * Default constructor. 
     */
    public RegisterMember() {
        // TODO Auto-generated constructor stub
    }
    
  	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String name = request.getParameter("name");
		String surname = request.getParameter("surname");
		System.out.println(name + " "+ surname);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String name = request.getParameter("name");
		String surname = request.getParameter("surname");
		String email = request.getParameter("email");
		String password = request.getParameter("password");
		String username = request.getParameter("username");
		
		System.out.println(name +" "+surname+" "+ email+ " "+password);
		
		Connection connection = null;
		PreparedStatement preparedStatement = null;
		PreparedStatement userNameCountStatement;
		
		try {
			
				//long currentTime = System.currentTimeMillis();
						
				connection = DBConnectionUtil.getConnection();
				
				//long lastTime = System.currentTimeMillis();
				
				//System.out.println(lastTime - currentTime + " ms elapsed for creating db pool");
				
				String userNameCountSql = "select count(user_name) from user where user_name = ?" ;
				
				userNameCountStatement = connection.prepareStatement(userNameCountSql);
				
				userNameCountStatement.setString(1, username);
				
				ResultSet rs = userNameCountStatement.executeQuery();
				
				long count = 0;
				if(rs.next()){					
					count = rs.getLong(1);					
				}
				
				if(count > 0){					
					request.getSession().setAttribute("message",  username+" user name has already been taken");
					response.sendRedirect("index.jsp");							
					return;
				}				
				
				
				String userInsertSql = "INSERT INTO user "
						+	"(user_name, password, is_active, name, surname, email, insert_date)"
						+	" VALUES (?, ?, ?, ?,?,?, ?)";
				
				preparedStatement = connection.prepareStatement(userInsertSql, Statement.RETURN_GENERATED_KEYS);
				
				preparedStatement.setString(1, username);
				preparedStatement.setString(2, password);
				preparedStatement.setBoolean(3, true);
				preparedStatement.setString(4, name);
				preparedStatement.setString(5, surname);
				preparedStatement.setString(6, email);
				preparedStatement.setTimestamp(7, new Timestamp(new Date().getTime()));
				
				connection.setAutoCommit(false);
				
				int affectedRowCount = preparedStatement.executeUpdate();
				ResultSet autoIncrementResultSet = preparedStatement.getGeneratedKeys();
				int autoIncrementedUserId = 0;
				if(autoIncrementResultSet.next()){
					autoIncrementedUserId = autoIncrementResultSet.getInt(1);
				}
				
				if(affectedRowCount > 0)
					{
					request.getSession().setAttribute("username", username);
					response.sendRedirect("memberhome.jsp");
					}
				else
				{
					request.getSession().setAttribute("message", "A database error occurred");
					response.sendRedirect("index.jsp");
				}
				
				
				String key = new Date().getTime()+"";
				
				String emailValidationInsertSql = "INSERT INTO qapro.email_validation"
						+" (validation_code,email,user_id,is_validated,insert_date,validation_date)"
						+" VALUES	(?,?,?,?,?,?)";
				PreparedStatement validationStatement = connection.prepareStatement(emailValidationInsertSql);
				validationStatement.setString(1, key);
				validationStatement.setString(2, email);
				validationStatement.setInt(3, autoIncrementedUserId);
				validationStatement.setBoolean(4, false);
				validationStatement.setTimestamp(5, new Timestamp(new Date().getTime()));
				validationStatement.setTimestamp(6, null);
				validationStatement.executeUpdate();
				connection.commit();
				
				// localhost:8080/QA_Pro/validate?key=sdfsfsdf&userid=423
				System.out.println(request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+request.getContextPath()+"/validate?key="+key+"&userid="+autoIncrementedUserId);
				
				//lastTime = System.currentTimeMillis();
				//System.out.println(lastTime - currentTime+" ms elapsed for inserting");
				
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			
		} catch (PropertyVetoException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		catch(Exception e){
			try {
				connection.rollback();
			} catch (SQLException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}
		}
		
		finally{

			try {
				if(preparedStatement != null)
					preparedStatement.close();
				if(connection != null)
					connection.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}				
		}		
	}

}
