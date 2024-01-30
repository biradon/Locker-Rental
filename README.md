# Run docker in AWS EC2 Amazon Linux
1. Start the docker daemon -> sudo systemctl start docker
2. If have permission denied -> sudo chmod 666 /var/run/docker.sock
3. To setup docker in the server -> https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-docker.html
4. Install docker compose -> https://docs.docker.com/compose/install/linux/
5. To transfer the file from local -> scp -r -i vs-flask-1.pem C:\Users\biradon\CS\'Rental Locker' ec2-user@34.227.151.58:/home/ec2-user
6. docker compose build
7. docker compose up -d
8. To public the website run in instance -> sudo docker run -d -p 80:5000 rentallocker-web
