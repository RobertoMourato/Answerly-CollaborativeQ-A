<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    // Don't add create and update timestamps in database.
    public $timestamps  = false;
    
    protected $table = "user";

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'first_name', 'last_name', 'email', 'bio', 'username', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    // ---------------------- what this user has ----------------------

    /**
    * 
    * The questions this user has
    */
    public function questions() {
        return $this->hasMany('App\Question');
    }

    /**
    * 
    * The answers this user has
    */
    public function answers() {
        return $this->hasMany('App\Answer');
    }

    /**
    * 
    * The comments this user has
    */
    public function comments() {
        return $this->hasMany('App\Comment');
    }




}
