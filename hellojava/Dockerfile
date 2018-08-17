FROM java:7

MAINTAINER sorididim11 <sorididim11@gmail.com>

ENV FOO bar
ENV goo spam

WORKDIR /hellodocker
RUN bash -c 'mkdir -p /hellodocker/{src,bin}'

COPY src/HelloDocker.java src/
RUN javac -d bin/ src/HelloDocker.java

CMD ["java", "-cp", "bin", "HelloDocker"]

