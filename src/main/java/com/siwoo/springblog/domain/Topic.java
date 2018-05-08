package com.siwoo.springblog.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-06 오후 12:58
 **/

@Data
@ToString(exclude = "category")
@Entity
@Table(name = "tbl_topic",
        uniqueConstraints = @UniqueConstraint(columnNames = {"topic_index", "category_id"}))
@EqualsAndHashCode(of = {"id", "name", "category"})
public class Topic {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Column(length = 2000)
    private String description;

    private BasicTime basicTime;

    private String shortDescription;

    private Integer rating;

    private String youtubeId;

    @Column(name = "topic_index")
    private Integer index;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

    @JsonIgnore
    @OneToMany(mappedBy = "topic",
    orphanRemoval = true, cascade = CascadeType.ALL)
    private List<Paragraph> paragraphs = new ArrayList<>();

    public int getNextIndex() {
        if (!indexed()) {
            throw new IllegalStateException("Set Index First");
        }
        return index + 1;
    }

    public boolean indexed() {
        return this.index != null;
    }
}
