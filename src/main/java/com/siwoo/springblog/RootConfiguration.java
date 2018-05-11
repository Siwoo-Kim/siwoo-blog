package com.siwoo.springblog;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-07 오전 10:36
 **/

@Configuration
@PropertySource({"classpath:/META-INF/api-key.properties",
        "classpath:/META-INF/admin.properties"})
public class RootConfiguration {

}
