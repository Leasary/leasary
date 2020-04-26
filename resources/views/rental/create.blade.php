@extends('layouts.full')

@section('content')

    <a href="/rentals">Back to Rentals</a>

    @if (session('status'))
        <div class="alert alert-success" role="alert">
            {{ session('status') }}
        </div>
    @endif

    <form method="POST" action="/rentals" enctype="multipart/form-data">
        @csrf

        <x-inputs.text key="address" label="Address"/>
        <x-inputs.text key="city" label="City"/>
        <x-inputs.text key="state" label="State"/>
        <x-inputs.text key="zipcode" label="Zipcode"/>

        <x-inputs.money key="rent_deposit" label="Deposit"/>
        <x-inputs.money key="rent_monthly" label="Monthly Rent"/>

        <div class="file">
            <label class="file-label">
                <input class="file-input" type="file" name="photos" multiple>
                <span class="file-cta">
                                      <span class="file-icon">
                                        <i class="fas fa-upload"></i>
                                      </span>
                                      <span class="file-label">
                                        Choose some photos…
                                      </span>
                                    </span>
            </label>
        </div>

        <div class="control">
            <button type="submit" class="button is-link">Submit</button>
        </div>
    </form>
@endsection
