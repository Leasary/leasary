@extends('layouts.full')

@section('title', 'Rentals')

@section('content')

    <rental-list-view info-route="{{ route('api.v1.rentals.info') }}" property-route="{{ route('api.v1.rentals') }}"></rental-list-view>

@endsection

@section('old')

    <div class="box cta">
        <div class="level">
            <div class="level-left">
                <div class="level-item">
                    <input class="input is-flex" type="text" placeholder="Search for properties">
                </div>
                <div class="level-item">
                    <p>Showing {{ $rentals->perPage() }} of {{  $rentals->total() }} rentals</p>
                </div>
            </div>
            <div class="level-right">
            </div>
        </div>
    </div>



    @if (session('status'))
        <div class="alert alert-success" role="alert">
            {{ session('status') }}
        </div>
    @endif

    <div id="mapid"></div>

    <div class="columns is-multiline">
        @foreach ($rentals as $rental)
            <div class="column is-one-quarter">
                <x-rental-card :rental="$rental" />
            </div>
        @endforeach
    </div>


    <div class="box cta">
        {{ $rentals->links() }}
    </div>
@endsection
