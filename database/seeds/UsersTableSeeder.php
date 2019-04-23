<?php

use App\User;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'Maël Bournigal',
            'email' => 'mael.bournigal@ynov.com',
            'password' => bcrypt('Bournigaldu44330'),
        ]);
    }
}
