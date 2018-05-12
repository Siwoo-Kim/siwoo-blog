package com.siwoo.springblog.security;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.config.oauth2.client.CommonOAuth2Provider;
import org.springframework.security.oauth2.client.registration.ClientRegistration;
import org.springframework.security.oauth2.client.registration.ClientRegistrationRepository;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.assertNotNull;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-11 오후 3:52
 **/

@RunWith(SpringRunner.class)
@SpringBootTest
public class TestClientRegistration {

    @Autowired
    ClientRegistrationRepository repository;

    @Test
    public void test() {
        System.out.println(CommonOAuth2Provider.GOOGLE.name());
        ClientRegistration google = repository.findByRegistrationId("google");
        assertNotNull(google);

    }

}
