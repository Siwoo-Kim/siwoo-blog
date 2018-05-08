package com.siwoo.springblog.learning;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.siwoo.springblog.domain.support.Youtube;
import com.siwoo.springblog.service.YoutubeService;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.io.IOException;
import java.net.URI;
import java.net.URL;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

import static org.junit.Assert.assertNotNull;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-07 오전 10:36
 **/

@Slf4j
@RunWith(SpringRunner.class)
@SpringBootTest
public class TestYoutube {

    @Autowired
    RestTemplate restTemplate;

    @Value("${api.key.youtube}")
    String apiKey;

    @Value("${api.url.youtube}")
    String apiUrl;


    @Data
    public static class Items {
        private String id;
        private Snippet snippet;

    }

    @Data
    public static class Snippet {
        private String title;
        private String description;
        private LocalDateTime publishedAt;
        private Thumbnails thumbnails;
    }

    @Data
    public static class Thumbnails {
        public High high;

        @Data
        public static class High {
            public URL url;
        }
    }

    @Autowired
    ObjectMapper objectMapper;
    @Autowired
    YoutubeService youtubeService;
    @Test
    public void search() throws IOException {
        System.out.println(apiUrl);;
        String videoId = "oTcSW4-_1Ew";
        URI uri = UriComponentsBuilder.fromUriString(apiUrl)
                .queryParam("part","snippet,contentDetails,statistics")
                .queryParam("id", videoId)
                .queryParam("key", apiKey)
                .build().toUri();

        ResponseEntity<String> result = restTemplate.getForEntity(uri, String.class);

        JsonNode node = objectMapper.readValue(result.getBody(), JsonNode.class);
        Items items = objectMapper.readValue(node.get("items").get(0).toString(), Items.class);
        System.out.println(items);

        Youtube youtube = youtubeService.get(videoId);
        assertNotNull(youtube);
        System.out.println(youtube);
    }
}
