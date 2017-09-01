package com.qapro.util;

import java.beans.PropertyVetoException;
import java.sql.Connection;
import java.sql.SQLException;

import com.mchange.v2.c3p0.ComboPooledDataSource;

public class DBConnectionUtil {
	
	private static ComboPooledDataSource dataSource;
	
	private static ComboPooledDataSource getInstance() throws PropertyVetoException
	{
	
		if(dataSource == null){			
			dataSource = new ComboPooledDataSource();
			dataSource.setDriverClass("com.mysql.jdbc.Driver");
			dataSource.setJdbcUrl("jdbc:mysql://localhost:3306/qapro");
			dataSource.setUser("root");
			dataSource.setPassword("root");
			
			dataSource.setMinPoolSize(5);
			dataSource.setMaxPoolSize(20);
			
		}
		return dataSource;
	}
	
	
	public static Connection getConnection() throws SQLException, PropertyVetoException{
		
		return getInstance().getConnection();
	}

}
