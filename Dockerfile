FROM centos
	 
# Upgrading system
RUN yum -y upgrade
RUN yum -y install curl
RUN yum -y install gcc gcc-c++
 
# Downloading & Config Node
RUN yum install -y epel-release
WORKDIR /tmp
RUN curl — silent — location https://rpm.nodesource.com/setup_9.x | bash -
RUN yum install -y nodejs
RUN node --version
WORKDIR /home
RUN mkdir luisca
WORKDIR /home/luisca
# install and cache app dependencies
COPY package.json package.json
COPY dist dist
RUN npm install

EXPOSE 8000
WORKDIR /home/luisca/dist
#Config app
CMD node /home/luisca/dist/server.js




