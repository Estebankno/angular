const router = require('express').Router();
const connection = require('./config/connection.js');

//GET MOVIE
router.get('/', (req, res) =>{
    let sql = 'select * from movie'
    connection.query(sql,(err, rows, fields) =>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
});

//GET MOVIES
router.get('/:id', (req, res) =>{
    const {id} = req.params
    let sql = 'SELECT * FROM  movie WHERE mov_id = ?'
    connection.query(sql,[id],(err, rows, fields) =>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
});

// ADD MOVIE
router.post('/',(req, res) => {
    const{mov_id, mov_title, mov_year, mov_time, mov_lang, mov_dt_rel, mov_rel_country} = req.body
    let sql = `INSERT INTO
    movie(mov_id, mov_title, mov_year, mov_time, mov_lang, mov_dt_rel, mov_rel_country)
    values('${mov_id}','${mov_title}','${mov_year}','${mov_time}','${mov_lang}','${mov_dt_rel}','${mov_rel_country}')`
    connection.query(sql, (err, rows, fields) => {
        if(err) throw err
        else{
            res.json({status: 'Movie added'});
        }
    });
});

//DELETE MOVIE
router.delete('/:id', (req, res) => {
    const {id} = req.params
    let sql = `DELETE FROM movie WHERE mov_id = '${id}'`
    connection.query(sql, (err, rows, fields) => {
        if(err) throw err
        else{
            res.json({status: 'Movie removed'})
        }
    })
});

//UPDATE DATA
router.put('/:id', (req, res) => {
    const{id} = req.params
    const{mov_title, mov_year, mov_time, mov_lang, mov_dt_rel, mov_rel_country} = req.body
    let sql = `UPDATE movie SET
    mov_title = '${mov_title}',
    mov_year = '${mov_year}',
    mov_time = '${mov_time}',
    mov_lang = '${mov_lang}',
    mov_dt_rel = '${mov_dt_rel}',
    mov_rel_country = '${mov_rel_country}'
    WHERE mov_id = '${id}'`
    connection.query(sql, (err, rows, fields) => {
        if(err) throw err
        else{
            res.json({status: 'Modified data'})
        }
    })
});
//---------------------------------------

module.exports = router;