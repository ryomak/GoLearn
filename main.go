package main

import "os"
import "encoding/json"
import "log"
import "github.com/gorilla/mux"
import "github.com/urfave/negroni"
import "net/http"
import "time"

type Article struct {
	Title string    `json:"title"`
	Url   string    `json:"url"`
	Like  int       `json:"likes_count"`
	Date  time.Time `json:"created_at"`
}

type Articles []Article

func main() {
	port := os.Args[1]
	r := mux.NewRouter()
	r.HandleFunc("/api/{page}", IndexHandler)

	//negroni
	n := negroni.New()
	n.Use(negroni.NewLogger())
	n.UseHandler(r)
	log.Printf("start server :%v", port)
	log.Fatal(http.ListenAndServe(":"+port, n))
}

func IndexHandler(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	page := vars["page"]
	if page == "" {
		page = "1"
	}
	url := "https://qiita.com/api/v2/tags/Go/items?per_page=30&page=" + page
	articles := []Article{}
	if err := getJson(url, &articles); err != nil {
		log.Printf("%v", err)
	}
	a, err := json.Marshal(articles)
	if err != nil {
		log.Printf("%v", err)
	}
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.WriteHeader(http.StatusOK)
	w.Write(a)
}

func getJson(url string, target interface{}) error {
	resp, err := http.Get(url)
	defer resp.Body.Close()
	if err != nil {
		return err
	}
	return json.NewDecoder(resp.Body).Decode(target)
}
