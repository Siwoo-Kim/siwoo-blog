package com.siwoo.springblog.support.fixture;

import com.siwoo.springblog.domain.Paragraph;
import com.siwoo.springblog.domain.Topic;

import java.util.ArrayList;
import java.util.List;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-07 오후 1:51
 **/


public class ParagraphFixtureProvider {

    public static List<Paragraph> paragraphs(Topic topic) {
        List paragraphs = new ArrayList();

        Paragraph parent = new Paragraph();
        parent.setName("Building a RESTful Web Service with Spring Boot Actuator");
        parent.setDescription("First you set up a basic build script. You can use any build system you like when building apps with Spring, but the code you need to work with Maven is included here. If you’re not familiar with Maven, refer to Building Java Projects with Maven.");
        parent.setTopic(topic);

        Paragraph child = new Paragraph();
        child.setName("Create the directory structure");
        child.setDescription("In a project directory of your choosing, create the following subdirectory structure; for example, with mkdir -p src/main/java/hello on *nix systems:");
        child.setCode("└── src\n" + "    └── main\n" + "        └── java\n" + "            └── hello");
        child.setParent(parent);
        child.setTopic(topic);

        child = new Paragraph();
        child.setName("The Spring Boot Maven plugin provides many convenient features");
        child.setDescription("It collects all the jars on the classpath and builds a single, runnable \"über-jar\", which makes it more convenient to execute and transport your service.\n" + "\n" + "It searches for the public static void main() method to flag as a runnable class.\n" + "\n" + "It provides a built-in dependency resolver that sets the version number to match Spring Boot dependencies. You can override any version you wish, but it will default to Boot’s chosen set of versions.");
        child.setCode("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" + "<project xmlns=\"http://maven.apache.org/POM/4.0.0\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\n" + "    xsi:schemaLocation=\"http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd\">\n" + "    <modelVersion>4.0.0</modelVersion>\n" + "\n" + "    <groupId>org.springframework</groupId>\n" + "    <artifactId>gs-actuator-service</artifactId>\n" + "    <version>0.1.0</version>\n" + "\n" + "    <parent>\n" + "        <groupId>org.springframework.boot</groupId>\n" + "        <artifactId>spring-boot-starter-parent</artifactId>\n" + "        <version>2.0.1.RELEASE</version>\n" + "    </parent>\n" + "\n" + "    <dependencies>\n" + "        <dependency>\n" + "            <groupId>org.springframework.boot</groupId>\n" + "            <artifactId>spring-boot-starter-web</artifactId>\n" + "        </dependency>\n" + "        <dependency>\n" + "            <groupId>org.springframework.boot</groupId>\n" + "            <artifactId>spring-boot-starter-actuator</artifactId>\n" + "        </dependency>\n" + "        <dependency>\n" + "            <groupId>org.springframework.boot</groupId>\n" + "            <artifactId>spring-boot-starter-test</artifactId>\n" + "            <scope>test</scope>\n" + "        </dependency>\n" + "    </dependencies>\n" + "\n" + "    <properties>\n" + "        <java.version>1.8</java.version>\n" + "    </properties>\n" + "\n" + "    <build>\n" + "        <plugins>\n" + "            <plugin>\n" + "                <groupId>org.springframework.boot</groupId>\n" + "                <artifactId>spring-boot-maven-plugin</artifactId>\n" + "            </plugin>\n" + "        </plugins>\n" + "    </build>\n" + "\n" + "</project>");
        child.setParent(parent);
        child.setTopic(topic);
        paragraphs.add(parent);

        parent = new Paragraph();
        parent.setName("Run the empty service1");
        parent.setDescription("For starters, here’s an empty Spring MVC application.");
        parent.setCode("package hello;\n" + "\n" + "import org.springframework.boot.SpringApplication;\n" + "import org.springframework.boot.autoconfigure.SpringBootApplication;\n" + "\n" + "@SpringBootApplication\n" + "public class HelloWorldApplication {\n" + "\n" + "    public static void main(String[] args) {\n" + "        SpringApplication.run(HelloWorldApplication.class, args);\n" + "    }\n" + "\n" + "}");
        parent.setTopic(topic);

        child = new Paragraph();
        child.setName("Run the empty service2");
        child.setDescription("$ ./gradlew clean build && java -jar build/libs/gs-actuator-service-0.1.0.jar");
        child.setParent(parent);
        child.setTopic(topic);
        paragraphs.add(parent);

        parent = new Paragraph();
        parent.setName("Create a resource controller");
        parent.setDescription("In Spring, REST endpoints are just Spring MVC controllers. The following Spring MVC controller handles a GET request for /hello-world and returns the Greeting resource:");
        parent.setCode("package hello;\n" + "\n" + "import java.util.concurrent.atomic.AtomicLong;\n" + "\n" + "import org.springframework.stereotype.Controller;\n" + "import org.springframework.web.bind.annotation.GetMapping;\n" + "import org.springframework.web.bind.annotation.RequestParam;\n" + "import org.springframework.web.bind.annotation.ResponseBody;\n" + "\n" + "@Controller\n" + "public class HelloWorldController {\n" + "\n" + "    private static final String template = \"Hello, %s!\";\n" + "    private final AtomicLong counter = new AtomicLong();\n" + "\n" + "    @GetMapping(\"/hello-world\")\n" + "    @ResponseBody\n" + "    public Greeting sayHello(@RequestParam(name=\"name\", required=false, defaultValue=\"Stranger\") String name) {\n" + "        return new Greeting(counter.incrementAndGet(), String.format(template, name));\n" + "    }\n" + "\n" + "}");
        parent.setTopic(topic);
        paragraphs.add(parent);

        parent = new Paragraph();
        parent.setName("Test your application");
        parent.setDescription("In order to check if your application is functional you should write unit / integration tests of your application. Below you can find an example of such a test that checks:\n" + "\n" + "if your controller is responsive\n" + "\n" + "if your management endpoint is responsive\n" + "\n" + "As you can see for tests we’re starting the application on a random port.");
        parent.setCode("/*\n" + " * Copyright 2012-2014 the original author or authors.\n" + " *\n" + " * Licensed under the Apache License, Version 2.0 (the \"License\");\n" + " * you may not use this file except in compliance with the License.\n" + " * You may obtain a copy of the License at\n" + " *\n" + " *      http://www.apache.org/licenses/LICENSE-2.0\n" + " *\n" + " * Unless required by applicable law or agreed to in writing, software\n" + " * distributed under the License is distributed on an \"AS IS\" BASIS,\n" + " * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n" + " * See the License for the specific language governing permissions and\n" + " * limitations under the License.\n" + " */\n" + "package hello;\n" + "\n" + "import java.util.Map;\n" + "\n" + "import org.junit.Test;\n" + "import org.junit.runner.RunWith;\n" + "import org.springframework.beans.factory.annotation.Autowired;\n" + "import org.springframework.beans.factory.annotation.Value;\n" + "import org.springframework.boot.test.context.SpringBootTest;\n" + "import org.springframework.boot.test.web.client.TestRestTemplate;\n" + "import org.springframework.boot.web.server.LocalServerPort;\n" + "import org.springframework.http.HttpStatus;\n" + "import org.springframework.http.ResponseEntity;\n" + "import org.springframework.test.context.TestPropertySource;\n" + "import org.springframework.test.context.junit4.SpringRunner;\n" + "\n" + "import static org.assertj.core.api.BDDAssertions.then;\n" + "\n" + "/**\n" + " * Basic integration tests for service demo application.\n" + " *\n" + " * @author Dave Syer\n" + " */\n" + "@RunWith(SpringRunner.class)\n" + "@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)\n" + "@TestPropertySource(properties = {\"management.port=0\"})\n" + "public class HelloWorldApplicationTests {\n" + "\n" + "\t@LocalServerPort\n" + "\tprivate int port;\n" + "\n" + "\t@Value(\"${local.management.port}\")\n" + "\tprivate int mgt;\n" + "\n" + "\t@Autowired\n" + "\tprivate TestRestTemplate testRestTemplate;\n" + "\n" + "\t@Test\n" + "\tpublic void shouldReturn200WhenSendingRequestToController() throws Exception {\n" + "\t\t@SuppressWarnings(\"rawtypes\")\n" + "\t\tResponseEntity<Map> entity = this.testRestTemplate.getForEntity(\n" + "\t\t\t\t\"http://localhost:\" + this.port + \"/hello-world\", Map.class);\n" + "\n" + "\t\tthen(entity.getStatusCode()).isEqualTo(HttpStatus.OK);\n" + "\t}\n" + "\n" + "\t@Test\n" + "\tpublic void shouldReturn200WhenSendingRequestToManagementEndpoint() throws Exception {\n" + "\t\t@SuppressWarnings(\"rawtypes\")\n" + "\t\tResponseEntity<Map> entity = this.testRestTemplate.getForEntity(\n" + "\t\t\t\t\"http://localhost:\" + this.mgt + \"/actuator/info\", Map.class);\n" + "\n" + "\t\tthen(entity.getStatusCode()).isEqualTo(HttpStatus.OK);\n" + "\t}\n" + "\n" + "}");
        parent.setTopic(topic);
        paragraphs.add(parent);

        return paragraphs;
    }
}
