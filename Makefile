all:
	@docker_compose -f srcs/requirements/docker-compose.yml up --build

stop:
	@docker_compose -f srcs/requirements/docker-compose.yml down

clean:
	@docker rm -f $(docker ps -a -q)

fclean:
	@docker system prune -a -f
	@docker volume prune -f
	@docker network prune -f

re: fclean all