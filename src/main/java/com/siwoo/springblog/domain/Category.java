package com.siwoo.springblog.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import javax.persistence.*;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-05 오후 6:14
 **/

@Data @ToString(exclude = "topics")
@Entity @Table(name = "tbl_category")
@EqualsAndHashCode(of = {"id","name"})
public class Category {
    private static final String IMG_RESOURCE_PATH = "/assets/img/domain/";

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String imgName;

    private BasicTime basicTime;

    @Column(length = 2000)
    private String description;

    private String shortDescription;

    @Enumerated(EnumType.STRING)
    private CategoryType type;

    @JsonIgnore
    @OneToMany(mappedBy = "category",
    orphanRemoval = true, cascade = CascadeType.ALL)
    private Set<Topic> topics = new HashSet<>();

    @JsonProperty
    public String getImgPath() {
        return IMG_RESOURCE_PATH + imgName;
    }

}
