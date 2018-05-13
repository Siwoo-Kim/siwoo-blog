package com.siwoo.springblog.domain;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.Embeddable;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-12 오후 6:06
 **/

@Data
@Embeddable
@EqualsAndHashCode
public class Image {

    private static final String SEPERATOR = "/";

    private String name;
    private String path;
    @Enumerated(EnumType.STRING)
    private ImageExtension extension;

    protected Image() { }

    public Image(String name, String path, ImageExtension extension) {
        this.name = resolveName(name);
        this.path = resolvePath(path);
        this.extension = extension;
    }

    private String resolvePath(String path) {
        return path.endsWith(SEPERATOR) ? path : path + SEPERATOR;
    }

    private String resolveName(String name) {
        return name.startsWith("/") ? name.substring(1, name.length()) : name ;
    }

    @JsonProperty
    public String getFullPath() {
        return path + name + extension.getExtension();
    }
}
