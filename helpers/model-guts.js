// The guts of a model that uses Knexjs to store and retrieve data from a
// database using the provided `knex` instance. Custom functionality can be
// composed on top of this set of common guts.
//
// The idea is that these are the most-used types of functions that most/all
// "models" will want to have. They can be overriden/modified/extended if
// needed by composing a new object out of the one returned by this function ;)
module.exports = ({
    knex = {},
    name = 'name',
    tableName = 'tablename',
    selectableProps = [],
    timeout = 1000
}) => {
    const create = props => {
        delete props.id;
        props["created_at"] = knex.fn.now();
        props["updated_at"] = knex.fn.now();

        return knex.insert(props)
            .returning(selectableProps)
            .into(tableName)
            .timeout(timeout);
    };

    const findAll = () => knex.select(selectableProps)
        .from(tableName)
        .timeout(timeout);

    const find = filter => knex.select(selectableProps)
        .from(tableName)
        .where(filter)
        .timeout(timeout);

    const joinFindAll = (table, selectable) /* 'students' */ => knex(tableName) // 'books'
        .join(table, table + ".id", "=", tableName + "." + table.slice(0, -1) + "_id")
        .select(selectable);

    // Same as `find` but only returns the first match if > 1 are found.
    const findOne = filters => find(filters)
        .then(res => {
            if (!Array.isArray(res)) return res;

            return res[0];
        });

    const findById = id => knex.select(selectableProps)
        .from(tableName)
        .where({
            id
        })
        .timeout(timeout);

    const update = (id, props) => {
        delete props.id // not allowed to set `id`

        return knex.update(props)
            .from(tableName)
            .where({
                id
            })
            .returning(selectableProps)
            .timeout(timeout)
    }

    const destroy = id => knex.del()
        .from(tableName)
        .where({
            id
        })
        .timeout(timeout)

    return {
        name,
        tableName,
        selectableProps,
        timeout,
        create,
        findAll,
        find,
        findOne,
        findById,
        update,
        destroy,
        joinFindAll,
    }
};