package com.acromere.www;

import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@org.springframework.context.annotation.Configuration
public class Configuration implements WebMvcConfigurer {

	@Override
	public void addViewControllers( ViewControllerRegistry registry ) {
		// A @Controller must be defined for this configuration to work
		registry.addViewController( "/**" ).setViewName( "forward:/index.html" );
	}

}
