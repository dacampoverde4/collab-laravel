<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use mikehaertl\wkhtmlto\Pdf;
use Illuminate\Support\Facades\Auth;

class PdfController extends Controller
{
    public function index() {
        // User must be logged in to download
        if(!Auth::check()) {
            return "Vous devez vous connecter pour télécharger ce pdf";
        }

        $view = view('partials.resumes.resume-download', ['downloading' => true]);
        $resume = $view->render();

        $pdf = new Pdf($resume);
        $file = $pdf->send('AP-101.pdf');
        if (!$file) {
            $error = $pdf->getError();
            return $error;
        }

        return response($file, 200);
    }
}
