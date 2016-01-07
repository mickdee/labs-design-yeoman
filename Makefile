# Replace labs-design-yeoman with your App Name
build:
    grunt build
    cd build/; echo "I'm in build";\
        cf push labs-design-yeoman -m 64M -b https://github.com/cloudfoundry/staticfile-buildpack.git; \
        cd ../