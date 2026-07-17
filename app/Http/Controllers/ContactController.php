<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreContactRequest;
use App\Mail\ContactFormMail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\RateLimiter;

class ContactController extends Controller
{
    public function store(StoreContactRequest $request): RedirectResponse
    {
        $key = 'contact:'.$request->ip();

        if (RateLimiter::tooManyAttempts($key, 6)) {
            return back()->withErrors([
                'message' => 'Too many messages sent. Please try again in a minute.',
            ]);
        }

        RateLimiter::hit($key, 60);

        $data = $request->validated();

        $email = config('portfolio.contact_email');

        if ($email) {
            Mail::to($email)->queue(new ContactFormMail(
                name: $data['name'],
                email: $data['email'],
                subject: $data['subject'],
                message: $data['message'],
            ));
        }

        return back()->with('success', 'Message sent successfully!');
    }
}
