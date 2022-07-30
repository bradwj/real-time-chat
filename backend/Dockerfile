FROM golang:1.18-alpine3.16
RUN mkdir /app
ADD . /app/
WORKDIR /app
RUN go mod download
RUN go build -v
RUN ls
CMD ["/app/real-time-chat"]
