# Use the official PostgreSQL image as the base
FROM postgres:15

# Set the environment variables for configuration
ENV POSTGRES_USER=user
ENV POSTGRES_PASSWORD=password
ENV POSTGRES_DB=dbname

# # Copy any custom PostgreSQL configuration files
COPY ./config/postgresql.conf /etc/postgresql/postgresql.conf

# Ensure the configuration file is used
CMD ["postgres", "-c", "config_file=/etc/postgresql/postgresql.conf"]