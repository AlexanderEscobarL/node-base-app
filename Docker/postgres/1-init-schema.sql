CREATE SCHEMA justplay;
CREATE ROLE justplay;

ALTER SCHEMA justplay OWNER TO postgres;

GRANT ALL ON SCHEMA justplay TO justplay;

