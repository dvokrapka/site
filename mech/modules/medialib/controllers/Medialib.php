<?php defined('BASEPATH') or exit('No direct script access allowed');

class Medialib extends Frontend
{
    public function __construct()
    {
        parent::__construct();
        $this->load->model('Medialib_model');
    }

// ------------------------------------------------------------------- SHOW MEDIA LIBRARY
    public function show($lib, $page_id = 0, $filter = null)
    {
        // GET MEDIA LIBRARY DATA
        $medialib = ($lib['id'] > 0)
            ? $this->Medialib_model->render_medialib($lib, $page_id, $filter)
            : null;

        // DISPLAY MEDIA LIBARY
        if ($medialib)
        {
            return $this->load->view('medialib/' . $medialib['tpl'] . '.tpl', $medialib, true);
        }
    }

}
