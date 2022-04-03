<th scope="col">
    @if ($sort !== $dataname)
        <a href="{{url('/')}}/{{$pageurl}}?sort={{$dataname}}">
            {{$text}}
        </a>
    @elseif ($sort === $dataname && $order === 'asc')
        <a href="{{url('/')}}/{{$pageurl}}?sort={{$dataname}}&order=desc">
            {{$text}}
            <i class="fas fa-caret-down"></i>
        </a>
    @elseif ($sort === $dataname && $order === 'desc')
        <a href="{{url('/')}}/{{$pageurl}}?sort={{$dataname}}&order=asc">
            {{$text}}
            <i class="fas fa-caret-up"></i>
        </a>
    @endif
</th>