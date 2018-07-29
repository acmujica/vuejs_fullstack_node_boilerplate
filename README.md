## Using this Boilerplate

### Included Software

### Note on Environment Variables with Docker

The txt files are used for development versions of the application. When 
the application is ran to production the developer should take care to not
expose these variables in the Dockerfile. Docker Secrets require Docker Swarm
and should be loaded into the environment directly from the command line.

``` docker secr