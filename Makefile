# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    Makefile                                           :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: zlafou <zlafou@student.42.fr>              +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2023/05/10 16:57:26 by zlafou            #+#    #+#              #
#    Updated: 2023/05/10 19:52:48 by zlafou           ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

run:
	@docker compose -f srcs/docker-compose.yml up --build

down:
	@docker compose -f srcs/docker-compose.yml down

build:
	@docker compose -f srcs/docker-compose.yml build

down_v:
	@docker compose -f srcs/docker-compose.yml down -v

down_i:
	@docker compose -f srcs/docker-compose.yml down --rmi all

down_n:
	@docker compose -f srcs/docker-compose.yml down --remove-orphans

down_all:
	@docker compose -f srcs/docker-compose.yml down -v --rmi all --remove-orphans

clean_all: down_v
	@docker system prune -a -f

re: down_all run

re_clean: clean_all run