package com.siwoo.springblog.support;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-09 오후 4:43
 **/

@Data
@Component("admin")
@ConfigurationProperties(prefix = "admin")
public class AdminProperties {

    private String email;
    private String password;
    private String name;
    private String nickName;

}
