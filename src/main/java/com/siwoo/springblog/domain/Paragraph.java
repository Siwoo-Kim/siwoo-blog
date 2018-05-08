package com.siwoo.springblog.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.siwoo.springblog.support.ParagraphException;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-07 오후 1:08
 **/

@Data
@ToString(exclude = {"topic", "parent"})
@Entity
@Table(name = "tbl_paragraph")
@EqualsAndHashCode(of = {"id", "name", "topic"})
public class Paragraph {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Column(length = 2000)
    private String description;

    @Column(name = "paragraph_code", length = 2500)
    private String code;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "topic_id")
    private Topic topic;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "parent_id")
    private Paragraph parent;

    @OneToMany(fetch = FetchType.EAGER,
            mappedBy = "parent",
            orphanRemoval = true, cascade = CascadeType.ALL)
    private Set<Paragraph> children = new HashSet<>();

    public void setParent(Paragraph parent) {
        validateRelation(parent, this);
        this.parent = parent;
        parent.addChildren(this);
    }

    public void addChildren(Paragraph child) {
        validateRelation(this, child);
        this.children.add(child);

        if(!child.isParent(this)) {
            child.setParent(this);
        }
    }
    public void setChildren(Set<Paragraph> children) {
        this.children = new HashSet<>();
        for (Paragraph child : children) {
            System.out.println(child);
            addChildren(child);
        }
    }

    void validateRelation(Paragraph parent, Paragraph child) {
        if(parent.hasParent()) {
            throw new ParagraphException("Parent cannot have  parent");
        }
        if(child.hasChildren()) {
            throw new ParagraphException("Children cannot have children");
        }
    }

    public boolean isParent(Paragraph parent) {
        return this.parent != null && this.parent.equals(parent);
    }

    public boolean isChild(Paragraph child) { return this.children.contains(child); }

    private boolean hasParent() {
        return this.parent != null;
    }

    public boolean hasChildren() {
        return !this.children.isEmpty();
    }
}
