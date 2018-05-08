package com.siwoo.springblog.domain.support;

import lombok.Data;
import lombok.ToString;

import java.net.URL;
import java.time.LocalDateTime;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-07 오전 11:30
 **/

@Data
@ToString
public class Youtube {
    private String id;
    private Snippet snippet;
    private String videoUrl;

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

}
