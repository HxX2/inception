all:
	@docker-compose -f srcs/docker-compose.yml up --build

stop:
	@docker-compose -f srcs/docker-compose.yml down

clean:
	@docker rm -f $(docker ps -a -q)

fclean:
	@docker system prune -a -f
	@docker volume rm -f $(docker volume ls -q) &> /dev/null ; true
	@docker network prune -f

re: fclean all