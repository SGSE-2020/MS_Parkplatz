![parkspace_logo.svg](assets/images/parkspace_logo.png)

## Get started
Verify Docker Compose is installed:
```bash
docker-compose --version
```

Bring services up:
```bash
docker-compose up --detach
```

## System requirements (minimum)

| Container          | RAM  | CPU     | HDD       |
| ------------------ |----- | ------- | --------- |
| Redis              | 4 GB | 2 Cores | 10 GB [1] |
| MySQL              | 2 GB | 1 Cores | 10 GB [2] |
| Atlas              | 1 GB | 1 Cores |  0 GB [3] |
| ParkSpace          | 1 GB | 1 Cores |  0 GB [3] |
| **cumulative**     | 8 GB | 5 Cores | 20 GB     |

- [1] Two Storage Devices
- [2] RAID10 or RAID 0+1 disk setup
- [3] No persistent storage

## Container overview 

| Container | Image              | Link                                         |
| --------- | ------------------ | -------------------------------------------- |
| Redis     | redis:6.0.1-alpine | [Docker Hub](https://hub.docker.com/_/redis) |
| MySQL     | mysql:8.0.20       | [Docker Hub](https://hub.docker.com/_/mysql) |
| Node      | node:latest        | [Docker Hub](https://hub.docker.com/_/node)  |
| NGINX     | nginx:alpine       | [Docker Hub](https://hub.docker.com/_/nginx) |
