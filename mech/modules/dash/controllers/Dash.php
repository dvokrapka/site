<?php defined('BASEPATH') or exit('No direct script access allowed');

class Dash extends Admin
{

    public function __construct()
    {
        parent::__construct();
    }

// -------------------------------------------------------------------------- DASHBOARD HOMEPAGE
    public function index()
    {
       redirect('admin/site');
    }

}
