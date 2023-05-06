all:
	@docker-compose -f srcs/docker-compose.yml up --build

down:
	@docker-compose -f srcs/docker-compose.yml down

build:
	@docker-compose -f srcs/docker-compose.yml build

clean:
	@docker rm -f $(docker ps -a -q)

fclean:
	@docker volume rm -f $(docker volume ls -q) &> /dev/null ; true
	@docker system prune -a -f
	@docker network prune -f
	@rm -rf /Users/zlafou/incep_data/wordpress/*
	@rm -rf /Users/zlafou/incep_data/mariadb/*

re: fclean all