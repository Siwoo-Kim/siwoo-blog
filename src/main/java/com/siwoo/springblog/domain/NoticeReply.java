package com.siwoo.springblog.domain;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;
import org.hibernate.validator.constraints.Length;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.HashSet;
import java.util.Set;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-12 오후 4:58
 **/

@Data @ToString(exclude = {"notice","blogger", "parent"})
@Entity @Table(name = "tbl_notice_reply")
@EqualsAndHashCode(of = {"id","content"})
public class NoticeReply {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "notice_id")
    private Notice notice;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "blogger_id")
    private Blogger blogger;

    @Length(max = 50, min = 5)
    private String content;

    private BasicDate basicDate;

    @OneToMany(mappedBy = "parent",
            fetch = FetchType.EAGER,
            orphanRemoval = true, cascade = CascadeType.ALL)
    private Set<NoticeReply> children = new HashSet<>();

    @ManyToOne
    @JoinColumn(name = "parent_id")
    private NoticeReply parent;

    public boolean isChild(NoticeReply child) {
        return children.contains(child);
    }

    public void addChild(NoticeReply child) {
        children.add(child);
        if(child.getParent() != this) {
            child.setParent(this);
        }
    }
}
