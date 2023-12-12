@extends('employee.layouts.app')
@section('content')
    <div class="row">
        <div class="col grid-distance">
            <div class="row grid-margin">
                <div class="col">
                    <div class="card card-profile">
                        <div class="card-body">
                            <div class="d-flex flex-row flex-wrap">
                                <img class="profile-avatar justify-content-center align-self-center" src="{{ URL::asset('img/mark.png') }}" alt="avatar">
                                <div class="wrapper ml-4 profile-justify-width">
                                    <div class="profile-title d-flex">
                                        <p class="mr-5">{{ $user->name }} {{ $user->last_name }}</p>
                                        <p class="ml-5">{{ $user->year_of_experience ?? 0 }} ans d'expériences</p>
                                    </div>
                                    <p class="profile-description">{{ $user->post ?? "Aucune" }}</p>
                                    <div class="profile-tags">
                                        @foreach($user->skills as $key => $skill)
                                            <span class="badge badge-sm badge-pill badge-theme-{{ array_next($badgeColors, count($user->skills), $key) }}-03">{{ $skill->title }}</span>
                                        @endforeach
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row grid-margin">
                <div class="col">
                    <div class="card card-info">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-5 info-title">
                                    <p>Adresse</p>
                                    <p>Code Postal</p>
                                    <p>Ville</p>
                                    <p>Numéro de téléphone</p>
                                    <p>Adresse email</p>
                                </div>
                                <div class="col-7 info-content">
                                    <p>{{ $user->address  }}</p>
                                    <p>{{ $user->postal_code }}</p>
                                    <p>{{ $user->city }}</p>
                                    <p>{{ $user->cellphone }}</p>
                                    <p>{{ $user->email }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row grid-margin">
                <div class="col">
                    <div class="card card-info">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-5 info-title">
                                    <p>Années d’expériences</p>
                                    <p>Anglais</p>
                                    <p>Autre langue</p>
                                    <p>En mission O/N</p>
                                </div>
                                <div class="col-7 info-content">
                                    <p>{{ $user->year_of_experience ?? 0 }}</p>
                                    <p>{{ isset($englishOptions[$user->english]) ? $englishOptions[$user->english]['title'] : '' }}</p>
                                    <p>{{ $user->other_language }}</p>
                                    <p>{{ $user->on_mission ? 'Oui' : 'Non' }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col grid-distance">
            @include('partials.resumes.resume-'.$settings->template)
        </div>
    </div>
@endsection