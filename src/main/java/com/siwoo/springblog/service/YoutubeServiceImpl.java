package com.siwoo.springblog.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.siwoo.springblog.domain.support.Youtube;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.io.IOException;
import java.net.URI;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-07 오전 11:29
 **/

@Service
public class YoutubeServiceImpl implements YoutubeService {

    @Autowired
    RestTemplate restTemplate;

    @Autowired
    ObjectMapper objectMapper;

    private static final String videoUrl = "https://www.youtube.com/watch?v=";
    @Value("${api.key.youtube}")
    String apiKey;

    @Value("${api.url.youtube}")
    String apiUrl;

    @Override
    public Youtube get(String videoId) {
        URI youtubeUri = buildUri(videoId);

        ResponseEntity<String> result = restTemplate.getForEntity(youtubeUri, String.class);
        return buildYoutube(result.getBody(), videoId);
    }

    private Youtube buildYoutube(String body, String videoId) {
        try {
            JsonNode node = objectMapper.readValue(body, JsonNode.class);
            Youtube youtube = objectMapper
                    .readValue(node.get("items").get(0).toString(), Youtube.class);
            youtube.setVideoUrl(videoUrl + videoId);
            return youtube;
        }catch (IOException e) {
            throw new IllegalStateException("Cannot parse JSON, try again");
        }
    }

    private URI buildUri(String videoId) {
        return UriComponentsBuilder.fromUriString(apiUrl)
                .queryParam("part","snippet,contentDetails,statistics")
                .queryParam("id", videoId)
                .queryParam("key", apiKey)
                .build()
                .toUri();
    }
}
