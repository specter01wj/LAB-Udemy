<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
<style type="text/css" ></style>

</head>

<body>


<c:if test="${not empty message }">
	<span style="color: #ff1100"> ${sessionScope.message} </span>
</c:if>

<form action="RegisterMember" method="POST">

Username: <input  type="text" name="username"></input>
<br></br>
EMail: <input  type="text" name="email"></input>
<br></br>
Name: <input  type="text" name="name"></input>
<br></br>
Surname: <input  type="text" name="surname"></input>
<br></br>
Password: <input  type="password" name="password" ></input>
<br></br>

<input type="submit" value="Submit">
</form>


</body>
</html>