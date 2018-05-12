package com.siwoo.springblog.web.rest;

import com.siwoo.springblog.domain.Social;
import com.siwoo.springblog.web.support.ControllerSupporter;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClient;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClientService;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import java.security.Principal;
import java.util.List;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-11 오후 4:07
 **/


@RestController
@RequestMapping("/rest/social")
public class SocialController {

    @Autowired
    OAuth2AuthorizedClientService authServcie;
    @Resource(name = "socials")
    List<Social> socials;
    @Autowired
    OAuth2AuthorizedClientService service;

    @GetMapping("/list")
    public SocialWrapper socials(HttpServletRequest request) {
        String hostURL = ControllerSupporter.hostPathString(request);
        return new SocialWrapper(hostURL, socials);
    }

    @GetMapping
    public Principal info(Principal principal) {
        return principal;
    }

    @Data
    public static class SocialWrapper {
        private String hostURL;
        private List<Social> socials;

        public SocialWrapper(String hostURL, List<Social> socials) {
            this.hostURL = hostURL;
            this.socials = socials;
        }
    }


}
