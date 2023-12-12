@extends('employee.layouts.app')
@section('content')
    <div class="row">
        <div class="col grid-distance">
            <!-- SEARCH INPUT -->
            <div class="row">
                <div class="col grid-margin">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control input-shadow input-rounded search-active" placeholder="Rechercher un profil">
                    </div>
                </div>
            </div>

            <!-- BOX 1 -->
            @foreach($skillsCategories as $key => $skillCategory)
                <div class="row grid-margin">
                    <div class="col">
                        <div class="card card-info">
                            <div class="card-body">
                                <p class="mb-4">
                                    <span class="badge badge-title badge-pill badge-medium badge-theme-{{ array_next($badgeColors, count($skillsCategories), $key) }}-03">{{ $skillCategory->title }}</span>
                                </p>
                                <p>
                                    @foreach($skillCategory->skills as $skill)
                                        @if(in_array($skill->id, $userSkills))
                                            <span class="badge badge-item badge-pill badge-medium badge-theme-magenta text-white mb-2">
                                                {{ $skill->title }}
                                            </span>
                                        @else
                                            <span class="badge  badge-item badge-pill badge-medium badge-theme-{{ array_next($badgeColors, count($skillsCategories), $key) }}-03 text-gray mb-2">
                                                {{ $skill->title }}
                                            </span>
                                        @endif
                                    @endforeach
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            @endforeach

        </div>
        <div class="col grid-distance">
            @include('partials.resumes.resume-'.$settings->template)
        </div>
    </div>
@endsection
@section('scripts')
    <script src="{{ URL::asset('js/employee/skill.js') }}"></script>
@endsection