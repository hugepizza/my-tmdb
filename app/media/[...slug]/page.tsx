import fetchMovieDetail from "@/app/sdk/imdb/movie/detail";
import MediaInfo from "./MediaInfo";
import TopBar from "./TapBar";
import CastList from "./CastList";
import fetchExternalIds from "@/app/sdk/imdb/external_ids";
import fetchKeywords from "@/app/sdk/imdb/keywords";

export default async function Page({ params }: { params: { slug: string[] } }) {
  const mediaType = params.slug[0];
  const id = params.slug[1];

  if (!mediaType || !id) {
    return <div>Channel Not Exists</div>;
  }

  return (
    <div className="flex flex-col w-full h-full items-center">
      <TopBar />
      <MediaInfo mediaId={id} mediaType={mediaType} />
      <ExtraInfo mediaId={id} mediaType={mediaType} />
    </div>
  );
}

async function ExtraInfo({
  mediaType,
  mediaId,
}: {
  mediaType: string;
  mediaId: string;
}) {
  return (
    <div className="flex w-full px-10 py-[30px] flex-row">
      <div className="flex flex-col flex-1 bg-white pr-[30px] overflow-x-hidden">
        <CastList mediaId={mediaId} mediaType={mediaType} />
        <div className="divider" />
      </div>
      <div className="flex flex-col bg-white w-[260px]">
        <Facts mediaId={mediaId} mediaType={mediaType} />
        <div className="divider" />
      </div>
    </div>
  );
}

async function Facts({
  mediaType,
  mediaId,
}: {
  mediaType: string;
  mediaId: string;
}) {
  const media = await fetchMovieDetail(mediaId);
  const externalIds = await fetchExternalIds(mediaType, mediaId);
  const keywords = await fetchKeywords(mediaType, mediaId);

  return (
    <section className="flex flex-col w-full text-base">
      <div className="flex w-full flex-row h-[60px]">
        <ExternalLink
          {...{ platform: "instagram", id: externalIds.instagram_id }}
        />
      </div>
      <FactItem {...{ title: "Status", value: media.status }} />
      <FactItem
        {...{ title: "Original Language", value: media.original_language }}
      />
      <FactItem
        {...{ title: "Budget", value: `$${media.budget.toLocaleString()}` }}
      />
      <FactItem
        {...{ title: "Budget", value: `$${media.revenue.toLocaleString()}` }}
      />
      <div className="flex flex-col my-[30px]">
        <h4>Keywords</h4>
        <div className="flex flex-wrap">
          {keywords.keywords.map((ele) => (
            <div
              key={ele.id}
              className="badge mr-[4px] mb-[4px] rounded-md bg-slate-300 badge-lg border-none"
            >
              {ele.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
function ExternalLink({ platform, id }: { platform: string; id?: string }) {
  if (!id) {
    return <></>;
  }
  const href = `${platform}/${id}`;
  return (
    <span
      style={{
        backgroundImage: `url(/${platform}.svg)`,
        height: 30.4,
        width: 30.4,
      }}
    >
      <a href={href}></a>
    </span>
  );
}
function FactItem({ title, value }: { title: string; value: string }) {
  return (
    <div className="mb-5 h-10">
      <strong>
        <bdi>{title}</bdi>
      </strong>
      <p>{value}</p>
    </div>
  );
}
