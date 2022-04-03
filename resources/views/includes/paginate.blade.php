
<nav aria-label="Page navigation">
    <ul class="pagination justify-content-end">
        @if ((int)$page === 1)
            <li class="page-item  disabled">
                <a class="page-link" tabindex="-1" aria-disabled="true"><<</a>
            </li>
        @else
            <li class="page-item ">
                <a class="page-link" href="{{url('/')}}/{{$pageurl}}?sort={{$sort}}&order={{$order}}&page=1" tabindex="-1" aria-disabled="true"><<</a>
            </li>
        @endif

        @for ($i = 1; $i <= (int)$lastPage; $i++)
            @if ((int)$page === $i)
                <li class="page-item disabled">
                    <a class="page-link">
                        {{$i}}
                    </a>
                </li>
            @else
                <li class="page-item">
                    <a class="page-link" href="{{url('/')}}/{{$pageurl}}?sort={{$sort}}&order={{$order}}&page={{$i}}">
                        {{$i}}
                    </a>
                </li>
            @endif
        @endfor

        @if ((int)$page === (int)$lastPage)
            <li class="page-item disabled">
                <a class="page-link">>></a>
            </li>
        @else
            <li class="page-item">
                <a class="page-link" href="{{url('/')}}/{{$pageurl}}?sort={{$sort}}&order={{$order}}&page={{$lastPage}}">>></a>
            </li>
        @endif
    </ul>
</nav>