package com.siwoo.springblog.domain;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import javax.annotation.Resource;
import java.util.List;

import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-11 오후 4:04
 **/

@RunWith(SpringRunner.class)
@SpringBootTest
public class TestSocials {

    @Resource(name = "socials")
    List<Social> socials;

    @Test
    public void socials() {
        assertNotNull(socials);
        assertTrue(!socials.isEmpty());
        System.out.println(socials);
    }
}
