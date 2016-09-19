create database recipify_api;
use recipify_api
create table if not exists recipes (
    id serial primary key,
    name text not null,
    description text
);

create table if not exists tags (
    id serial primary key,
    tag text not null
);

create table if not exists steps (  
    id serial primary key,
    step text not null,
    recipe_id integer references recipes
);

create table if not exists recipe_tags (
    recipe_id integer references recipes,
    tag_id integer references tags,
    primary key (recipe_id, tag_id)
);
