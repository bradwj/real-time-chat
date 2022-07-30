package main

import (
	"fmt"
	"net/http"
	
  "github.com/bradwj/real-time-chat/pkg/websocket"
)

func serveWs(w http.ResponseWriter, r *http.Request) {
	ws, err := websocket.Upgrader(w, r)
	if err != nil {
		fmt.Fprintf(w, "%+V\n", err)
	}
	go websocket.Writer(ws)
	websocket.Reader(ws)
}

func setupRoutes() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprint(w, "Welcome to Chat App API")
	})

	http.HandleFunc("/ws", serveWs)
}

func main() {
	fmt.Println("Chat App API v0.01")
	setupRoutes()
	http.ListenAndServe(":8080", nil)
}