@extends('employee.layouts.app')
@section('content')
    <div class="row">
        <div class="col grid-distance">

        </div>
        <div class="col grid-distance">
            @include('partials.resumes.resume-'.$settings->template)
        </div>
    </div>
@endsection