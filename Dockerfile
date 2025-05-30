FROM alpine

RUN apk update && apk add python3

WORKDIR /app
RUN echo "test">index.html
RUN echo "python3 -m http.server 8080">start.sh
RUN chmod +x start.sh

USER 1000

CMD ["python3", "-m", "http.server", "8080"]