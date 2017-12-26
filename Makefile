PORT:=8080

run:
	godep go build -o ./main ./main.go 
	./main $(PORT)

install:
	go get -u github.com/tools/godep
	godep save
	godep restore
	godep get

