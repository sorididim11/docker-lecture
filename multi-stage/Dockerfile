FROM centos:7

MAINTAINER sorididim11 <jong-gun.kim@hpe.com>

RUN yum group install -y "Development Tools"

WORKDIR /cpp
COPY hello.cpp /cpp
RUN make hello

ENV PATH "$PATH:."

CMD ["bash", "-c", "hello"]
