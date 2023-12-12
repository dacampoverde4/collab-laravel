@extends('admin.layouts.app')
@section('content')
    <div class="container-search">
        <!-- SEARCH INPUT -->
        <div class="row">
            <div class="col grid-margin">
                <div class="input-group mb-3">
                    <input type="text" class="form-control input-shadow input-rounded search-active" placeholder="Rechercher un profil">
                </div>
            </div>
        </div>

        <!-- SEARCH SUGGESTION -->
        <div class="row">
            <div class="col grid-margin">
                <ul class="list-inline search-suggestion">
                    <li class="list-inline-item search-item">Tous les profils</li>
                    <li class="list-inline-item search-item">Admin</li>
                    <li class="list-inline-item search-item">Employés</li>
                    <li class="list-inline-item search-item">Vente</li>
                    <li class="list-inline-item search-item">Entreprise</li>
                    <li class="list-inline-item search-item">
                        <button class="btn btn-dark btn-rounded btn-sm btn-block">Filtrer les profils</button>
                    </li>
                </ul>
            </div>
        </div>

        <!-- SEARCH RESULTS -->
        <div class="row">
            @foreach($users as $user)
                <div class="col-md-6 col-xs-12 grid-margin">
                    <div class="card card-profile card-clickable"
                         data-id="{{ $user->id }}"
                         data-first-name="{{ $user->name }}"
                         data-last-name="{{ $user->last_name }}"
                         data-email="{{ $user->email }}"
                         data-year-of-experience="{{ $user->year_of_experience ?? 0 }}"
                         data-job-type="{{ $user->post ?? "Aucune" }}"
                         data-skills="{{ implode(',', $user->skills->pluck('title')->toArray()) }}"
                         data-role="{{ $user->role() }}"
                    >
                        <div class="card-body">
                            <div class="d-flex flex-row flex-wrap">
                                <img class="profile-avatar justify-content-center align-self-center" src="{{ URL::asset('img/mark.png') }}" alt="avatar">
                                <div class="wrapper ml-4 profile-justify-width">
                                    <div class="profile-title d-flex">
                                        <p class="mr-4">{{ $user->name }} {{ $user->last_name }}</p>
                                        <p class="ml-4">{{ $user->year_of_experience ?? 0 }} ans d'expériences</p>
                                    </div>
                                    <p class="profile-description profile-description__sm">{{ $user->post ?? "Aucune" }}</p>
                                    <div class="profile-tags">
                                        @foreach($user->skills as $key => $skill)
                                            <span class="badge badge-sm badge-pill badge-theme-{{ array_next($badgeColors, count($user->skills), $key) }}-03">{{ $skill->title }}</span>
                                        @endforeach
                                    </div>
                                </div>
                            </div>
                            <div class="mt-3 profile-commercial">
                                <span>{{ ucfirst($user->role()) }} assigné :</span>
                                <img class="profile-avatar profile-avatar__sm" src="{{ URL::asset('img/mark.png') }}" alt="avatar">
                                <span class="ml-5">CV actualisé il y a 1 heure</span>
                            </div>
                        </div>
                    </div>
                </div>
            @endforeach
        </div>
    </div>
@endsection
@section('scripts')
    <script>
        function handleSearch(event) {
            const target = '.card-profile';
            const keywords = event.target.value;
            filterProfileByName(target, keywords);
        }

        $(function() {
            const $search = $('.search-active');
            $search.on('input', handleSearch);
        })
    </script>
@endsection